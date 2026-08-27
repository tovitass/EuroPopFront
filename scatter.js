var container = document.getElementById("background-scatter");
var imageList = [];
var imageFormats = ["jpg", "png", "jpeg", "webp"];
var imageLimit = 40;
var randomNumberThing = 0;

async function scanImages() {
    var loadedImages = [];
    var index = 0;

    while (index < imageLimit) {
        var oneImage = await tryLoad(index + 1);
        if (oneImage !== null) {
            loadedImages.push(oneImage);
        }
        index = index + 1;
    }

    for (var i = 0; i < loadedImages.length; i++) {
        imageList.push(loadedImages[i]);
    }

    shuffleArray(imageList);
    distributePosters();
}

function tryLoad(num) {
    return new Promise(function (resolve) {
        var attempts = 0;
        var alreadyDone = false;

        for (var i = 0; i < imageFormats.length; i++) {
            var ext = imageFormats[i];
            var img = new Image();
            img.src = "pictures/" + num + "." + ext;

            (function (theImage) {
                theImage.onload = function () {
                    if (alreadyDone === false) {
                        alreadyDone = true;
                        var data = {
                            src: theImage.src,
                            ratio: theImage.naturalHeight / theImage.naturalWidth || 1
                        };
                        resolve(data);
                    }
                };

                theImage.onerror = function () {
                    if (alreadyDone === false) {
                        attempts = attempts + 1;
                        if (attempts === imageFormats.length) {
                            alreadyDone = true;
                            resolve(null);
                        }
                    }
                };
            })(img);
        }
    });
}

function shuffleArray(array) {
    var copy = [];

    for (var i = 0; i < array.length; i++) {
        copy.push(array[i]);
    }

    for (var i = copy.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }

    for (var i = 0; i < copy.length; i++) {
        array[i] = copy[i];
    }
}

function distributePosters() {
    if (!container || imageList.length === 0) return;

    container.innerHTML = "";

    var viewport = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    var columnCount = Math.max(5, Math.min(12, Math.ceil(viewport.width / 150)));
    var gap = -34;
    var baseWidth = Math.max(190, Math.min(340, (viewport.width - gap * (columnCount - 1)) / columnCount));

    var columns = [];
    for (var i = 0; i < columnCount; i++) {
        columns.push({
            x: i * (baseWidth + gap) - baseWidth * 0.45 - Math.random() * 80,
            y: -260 - Math.random() * 220
        });
    }

    var placements = [];
    var imageIndex = 0;
    var repeatDistance = Math.min(520, Math.max(260, baseWidth * 1.25, viewport.width * 0.16));

    while (getLowestY(columns) < viewport.height + 460) {
        var column = getShortestColumn(columns);
        var scale = 0.95 + Math.random() * 0.55;
        var boxWidth = baseWidth * scale;
        var left = column.x + (Math.random() - 0.5) * 170;
        var top = column.y + (Math.random() - 0.5) * 70;
        var image = pickImageForSpot(imageIndex, placements, left, top, boxWidth, repeatDistance);

        if (!image) {
            column.y = column.y + baseWidth * 0.5;
            imageIndex = imageIndex + 1;
            continue;
        }

        var boxHeight = Math.max(180, Math.min(560, boxWidth * image.ratio));
        var overlapY = Math.min(220, boxHeight * (0.38 + Math.random() * 0.22));

        placements.push({
            src: image.src,
            left: left,
            top: top,
            width: boxWidth,
            height: boxHeight,
            rotation: Math.random() * 38 - 19,
            zIndex: Math.floor(Math.random() * 16),
            shadow: 5 + Math.floor(Math.random() * 12)
        });

        column.y = column.y + boxHeight + gap - overlapY + Math.random() * 18;
        imageIndex = imageIndex + 1;
    }

    var fillerCount = Math.max(45, Math.floor(columnCount * 5));
    for (var i = 0; i < fillerCount; i++) {
        var boxWidth = baseWidth * (0.75 + Math.random() * 0.65);
        var left = -baseWidth + Math.random() * (viewport.width + baseWidth * 2);
        var top = -baseWidth + Math.random() * (viewport.height + baseWidth * 2);
        var image = pickImageForSpot(imageIndex, placements, left, top, boxWidth, repeatDistance);
        if (!image) continue;

        placements.push({
            src: image.src,
            left: left,
            top: top,
            width: boxWidth,
            height: Math.max(180, Math.min(560, boxWidth * image.ratio)),
            rotation: Math.random() * 46 - 23,
            zIndex: Math.floor(Math.random() * 18),
            shadow: 5 + Math.floor(Math.random() * 12)
        });

        imageIndex = imageIndex + 1;
    }

    for (var i = 0; i < placements.length; i++) {
        appendImage(placements[i]);
    }
}

function getLowestY(columns) {
    var lowest = columns[0].y;
    for (var i = 1; i < columns.length; i++) {
        if (columns[i].y < lowest) {
            lowest = columns[i].y;
        }
    }
    return lowest;
}

function getShortestColumn(columns) {
    var best = columns[0];
    for (var i = 1; i < columns.length; i++) {
        if (columns[i].y < best.y) {
            best = columns[i];
        }
    }
    return best;
}

function pickImageForSpot(startIndex, placements, left, top, width, minDistance) {
    for (var offset = 0; offset < imageList.length; offset++) {
        var image = imageList[(startIndex + offset) % imageList.length];
        var height = Math.max(180, Math.min(560, width * image.ratio));
        var tooClose = false;

        for (var i = 0; i < placements.length; i++) {
            var placement = placements[i];
            if (placement.src === image.src && getRectDistance({ left: left, top: top, width: width, height: height }, placement) < minDistance) {
                tooClose = true;
            }
        }

        if (!tooClose) return image;
    }

    return null;
}

function getRectDistance(a, b) {
    var dx = Math.max(b.left - (a.left + a.width), a.left - (b.left + b.width), 0);
    var dy = Math.max(b.top - (a.top + a.height), a.top - (b.top + b.height), 0);
    return Math.hypot(dx, dy);
}

function appendImage(item) {
    var box = document.createElement("div");
    var img = document.createElement("img");

    box.className = "decor-box";
    img.src = item.src;
    img.alt = "";
    img.loading = "lazy";

    box.appendChild(img);
    box.style.width = item.width + "px";
    box.style.top = item.top + "px";
    box.style.left = item.left + "px";
    box.style.transform = "rotate(" + item.rotation + "deg)";
    box.style.zIndex = item.zIndex;
    box.style.boxShadow = item.shadow + "px " + item.shadow + "px 0 rgba(0, 0, 0, 0.8)";
    container.appendChild(box);
}

function debounce(callback, wait) {
    var timeout;
    return function () {
        window.clearTimeout(timeout);
        timeout = window.setTimeout(callback, wait);
    };
}

window.addEventListener("DOMContentLoaded", scanImages);
window.addEventListener("resize", debounce(distributePosters, 150));
