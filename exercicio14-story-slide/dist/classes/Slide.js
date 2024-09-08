import Timeout from "./Timeout.js";
export default class Slide {
    container;
    slides;
    controls;
    time;
    index;
    slide;
    timeout;
    paused;
    pausedTimeout;
    thumbItems;
    thumb;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.timeout = null;
        this.index = localStorage.getItem("activeSlide") ? Number(localStorage.getItem("activeSlide")) : 0;
        this.slide = this.slides[this.index];
        this.paused = false;
        this.pausedTimeout = null;
        this.thumbItems = null;
        this.thumb = null;
        this.init();
    }
    hide(el) {
        el.classList.remove("active");
        if (el instanceof HTMLVideoElement) {
            el.currentTime = 0;
            el.pause();
        }
    }
    show(index) {
        this.index = index;
        this.slide = this.slides[index];
        this.slides.forEach((el) => this.hide(el));
        this.slide.classList.add("active");
        if (this.thumbItems) {
            this.thumb = this.thumbItems[this.index];
            this.thumbItems.forEach((el) => this.hide(el));
            this.thumb.classList.add("active");
        }
        localStorage.setItem("activeSlide", String(this.index));
        if (this.slide instanceof HTMLVideoElement) {
            document.getElementById("mute-button")?.classList.add("active");
            this.autoVideo(this.slide);
        }
        else {
            document.getElementById("mute-button")?.classList.remove("active");
            this.auto(this.time);
        }
    }
    autoVideo(video) {
        let firstPlay = true;
        video.muted = true;
        video.play();
        video.addEventListener("playing", () => {
            firstPlay && this.auto(video.duration * 1000);
            firstPlay = false;
        });
    }
    auto(time) {
        this.timeout?.clear();
        this.timeout = new Timeout(() => this.next(), time);
        if (this.thumb)
            this.thumb.style.animationDuration = `${time}ms`;
    }
    prev() {
        if (this.paused)
            return;
        const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prev);
    }
    next() {
        if (this.paused)
            return;
        const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
        this.show(next);
    }
    pause() {
        document.body.classList.add("paused");
        this.pausedTimeout = new Timeout(() => {
            this.timeout?.pause();
            this.paused = true;
            this.thumb?.classList.add("paused");
            if (this.slide instanceof HTMLVideoElement)
                this.slide.pause();
        }, 300);
    }
    continue() {
        document.body.classList.remove("paused");
        this.pausedTimeout?.clear();
        if (this.paused) {
            this.paused = false;
            this.timeout?.continue();
            this.thumb?.classList.remove("paused");
            if (this.slide instanceof HTMLVideoElement)
                this.slide.play();
        }
    }
    toggleMute() {
        if (this.slide instanceof HTMLVideoElement) {
            this.slide.muted = !this.slide.muted;
        }
    }
    addControls() {
        const prevButton = document.createElement("button");
        const nextButton = document.createElement("button");
        const muteButton = document.createElement("button");
        muteButton.id = "mute-button";
        muteButton.innerHTML = "Mute";
        prevButton.innerText = "Slide Anterior";
        nextButton.innerText = "Próximo Slide";
        this.controls.appendChild(prevButton);
        this.controls.appendChild(nextButton);
        this.controls.appendChild(muteButton);
        this.controls.addEventListener("pointerdown", () => this.pause());
        document.addEventListener("pointerup", () => this.continue());
        document.addEventListener("touchend", () => this.continue());
        muteButton.addEventListener("pointerdown", () => this.toggleMute());
        prevButton.addEventListener("pointerup", () => this.prev());
        nextButton.addEventListener("pointerup", () => this.next());
    }
    addThumbItems() {
        const thumbContainer = document.createElement("div");
        thumbContainer.id = "slide-thumb";
        for (let i = 0; i < this.slides.length; i++) {
            thumbContainer.innerHTML += `<span><span class="thumb-item"></span></span>`;
        }
        this.controls.appendChild(thumbContainer);
        this.thumbItems = Array.from(document.querySelectorAll(".thumb-item"));
    }
    init() {
        this.addControls();
        this.addThumbItems();
        this.show(this.index);
    }
}
//# sourceMappingURL=Slide.js.map