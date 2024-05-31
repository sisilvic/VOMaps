import gsap from "gsap";


import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function () {

    this.UIkit = window.UIkit ? window.UIkit : null;
    this.svg = null,
    this.container = null,
    this.scale = 1,

    this.initDraggable = () => {

        Draggable.create(this.svg, {
            inertia: true,
            bounds: this.container,
            allowEventDefault: true,
            cursor: 'auto'
        });
    }

    this.initZoomButtons = () => {

        gsap.set(this.svg, {
            scale: this.scale
        });

        let zoomInButton = this.container.querySelector('.zoomin');
        let zoomOutButton = this.container.querySelector('.zoomout');

        if (zoomOutButton) {
            zoomOutButton.addEventListener('click', () => {
                this.zoomOut();
            })
        }

        if (zoomInButton) {
            zoomInButton.addEventListener('click', () => {
                this.zoomIn();
            })
        }

    }

    this.zoomIn = () => {
        if (this.scale >= 3) {
            return;
        }
        this.scale += 0.2;
        gsap.to(this.svg, {
            scale: this.scale,
            ease: "none",
            duration: 0.2
        })
    }

     this.zoomOut = () => {
        if (this.scale <= 1) {
            return;
        }
        this.scale -= 0.2;
        gsap.to(this.svg, {
            scale: this.scale,
            ease: "none",
            duration: 0.2
        })
    }


    this.initModalShapes = (data) => {
        data.forEach((shape_data) => {
            let shape = this.svg.querySelector('[data-name="'+ shape_data.name +'"]');

            if (!shape) {
                return;
            }

            shape.style.cursor = 'pointer';

            shape.querySelectorAll('[data-hover]').forEach((hover) => {
                hover.style.display = 'none';
            });

            shape.addEventListener('click', () => {

                if (shape_data.level) {
                    if (this.checkDisabled(shape_data.level)) {
                        return;
                    }
                }

                this.UIkit.modal('.'+shape_data.modal).show();
            })


            shape.addEventListener('mouseenter', () => {
                if (shape_data.level) {
                    if (this.checkDisabled(shape_data.level)) {
                        return;
                    }
                }

                shape.querySelectorAll('[data-hover]').forEach((hover) => {
                    hover.style.display = 'block';
                });
            });

            shape.addEventListener('mouseleave', () => {

                if (shape_data.level) {
                    if (this.checkDisabled(shape_data.level)) {
                        return;
                    }
                }

                shape.querySelectorAll('[data-hover]').forEach((hover) => {
                    hover.style.display = 'none';
                });
            });

        });


    }

    this.checkDisabled = (name) => {
        return this.svg.querySelector('[data-name="'+ name +'"]').hasAttribute('data-disabled')
    }

    this.initToggleButtons = (data) => {
        data.forEach(toggle_data => {
            let toggles = this.svg.querySelectorAll('[data-name="'+ toggle_data.name +'"]');

            let toggleables = this.container.querySelectorAll('[data-toggle="' + toggle_data.name + '"]');

            toggleables.forEach((toggleable) => {

                toggles.forEach((toggle) => {
                    if (toggleable.checked) {
                        toggle.style.display = 'block';
                    } else {
                        toggle.style.display = 'none';
                    }
                });

                toggleable.addEventListener('change', (e) => {
                    toggles.forEach((toggle) => {
                        if (e.target.checked) {
                            toggle.style.display = 'block';
                        } else {
                            toggle.style.display = 'none';
                        }
                    });
                });

            });

        });
    },

    this.initLevelButton = (data) => {
        let levelButton = this.container.querySelector('.levels');

        if (!levelButton) {
            return;
        }

        let currentLevel = 0;

        let buttonLevels = levelButton.querySelectorAll('span');

        function setButtonLevel() {
            buttonLevels.forEach((buttonLevel, key) => {
                if (key === currentLevel) {
                    buttonLevel.style.display = 'block';
                } else {
                    buttonLevel.style.display = 'none';
                }
            });
        }

        setButtonLevel();

        if (levelButton) {
            levelButton.addEventListener('click', () => {
                currentLevel = (currentLevel+1) % 4;

                setButtonLevel();

                data.forEach((level_data, key) => {

                    let level = this.svg.querySelector('[data-name="'+ level_data.name +'"]');

                    if (currentLevel === 0) {
                        level.style.opacity = 1;
                        level.removeAttribute('data-disabled');
                        return;
                    }

                    let index = key + 1;

                    if (index !== currentLevel) {
                        level.style.opacity = "0.4";
                        level.setAttribute('data-disabled', true);
                    } else {
                        level.style.opacity = "1";
                        level.removeAttribute('data-disabled');
                    }

                    if (index <= currentLevel) {

                        level.style.display = "block";
                    } else {
                        level.style.display = "none";
                    }

                })
            });
        }
    },

    this.init = (selector, shapes_data, toggles_data, levels_data, initial_scale = 1) => {

        this.container = document.querySelector(selector);

        if (!this.container) {
            return;
        }

        this.svg = this.container.querySelector(':scope > svg');

        if (!this.svg) {
            return;
        }

        console.log(this.svg);

        this.scale = initial_scale;

        this.initDraggable();

        this.initZoomButtons();

        this.initModalShapes(shapes_data);

        this.initToggleButtons(toggles_data);

        this.initLevelButton(levels_data);

    }
}