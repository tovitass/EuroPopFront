(() => {
    const frame = document.querySelector("[data-translatable-frame]");
    const site = document.querySelector(".site-container");
    const hero = document.querySelector(".hero-panel");
    const emblem = document.querySelector(".hero-emblem");
    if (!frame || !site || !hero || !emblem) return;

    let scheduled = false;

    function resetFrameContent(doc) {
        if (doc?.body) doc.body.style.overflowY = "";
        if (doc?.documentElement) doc.documentElement.style.overflowY = "";
    }

    function fitLayout() {
        scheduled = false;
        let doc;
        try {
            doc = frame.contentDocument;
            if (!doc?.body || !doc.documentElement) return;
        } catch (_) {
            return;
        }

        // Reset and measure once, so the compact state never feeds back into its own trigger.
        site.classList.remove("is-frame-compact", "is-hero-logo-hidden");
        site.style.removeProperty("--frame-fit-emblem-size");
        resetFrameContent(doc);
        window.fitHeroTitle?.();

        const title = hero.querySelector(".hero-title");
        const titleHeight = title?.getBoundingClientRect().height || 0;
        const emblemHeight = emblem.getBoundingClientRect().height;
        const logoNeedsTooMuchRoom = emblemHeight > window.innerHeight * 0.14 ||
            (titleHeight > 0 && emblemHeight > titleHeight * 1.5);
        if (logoNeedsTooMuchRoom) {
            site.classList.add("is-hero-logo-hidden");
            window.fitHeroTitle?.();
        }

        const iframeOverflow = Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight) - frame.clientHeight;
        if (iframeOverflow > 24) site.classList.add("is-frame-compact", "is-hero-logo-hidden");

        // Leave the embedded page at its normal scale. Scaling its board to
        // squeeze it into the iframe made all text shrink at a breakpoint.
    }

    function scheduleFit() {
        if (scheduled) return;
        scheduled = true;
        requestAnimationFrame(fitLayout);
    }

    frame.addEventListener("load", () => {
        scheduleFit();
        setTimeout(scheduleFit, 200);
        const doc = frame.contentDocument;
        doc?.fonts?.ready?.then(scheduleFit);
        if (doc?.body && window.MutationObserver) {
            new MutationObserver(scheduleFit).observe(doc.body, {
                childList: true,
                characterData: true,
                subtree: true
            });
        }
    });
    window.addEventListener("resize", scheduleFit, { passive: true });
    document.fonts?.ready?.then(scheduleFit);
    scheduleFit();
})();
