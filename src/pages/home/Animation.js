export const home = {
    hidden: { 
        opacity: 1
    },
    visible: {
        opacity: 1,
    }
}

export const leftText = {
    hidden: {
        x: -50, 
        opacity: 0
    },
    visible: {
        x: 0, 
        opacity: 1,
        transition: {
            duration: 2
        }
    }
}

export const resumeButton = {
    hidden: {
        x: -100, 
        opacity: 0
    },
    visible: {
        x: 0, 
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1
        }
    }
}

export const instaIcon = {
    hidden: {
        x: -100,
        y: 50, 
        opacity: 0
    },
    visible: {
        x: 0, 
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.8, 
            duration: 1, 
            type: 'spring', 
            // stiffness: 25
        }
    },
    hover: {
        scale: 1.2,
        transition: {
            yoyo: Infinity
        }
    }
}

export const linkedIcon = {
    hidden: {
        x: -100, 
        y: 50, 
        opacity: 0
    },
    visible: {
        x: 0, 
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.6, 
            duration: 1, 
            type: 'spring', 
            // stiffness: 50
        }
    },
    hover: {
        scale: 1.2,
        transition: {
            yoyo: Infinity
        }
    }
}

export const faceIcon = {
    hidden: {
        x: -100,
        y: 50,  
        opacity: 0
    },
    visible: {
        x: 0, 
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.4, 
            duration: 1, 
            type: 'spring', 
            // stiffness: 75
        }
    },
    hover: {
        scale: 1.2,
        transition: {
            yoyo: Infinity
        }
    }
}

export const gitIcon = {
    hidden: {
        x: -100, 
        y: 50, 
        opacity: 0
    },
    visible: {
        x: 0, 
        y: 0, 
        opacity: 1,
        transition: {
            delay: 0.2, 
            duration: 1, 
            type: 'spring', 
            // stiffness: 100
        }
    },
    hover: {
        scale: 1.2,
        transition: {
            yoyo: Infinity
        }
    }
}

export const homeImg = {
    hidden: {
        x: 150, 
        y: 50,
        opacity: 0
    },
    visible: {
        x: 0, 
        y: 0,
        opacity: 1,
        transition: {
            delay: 1,
            duration: 2, 
            type: 'spring', 
            // stiffness: 100
        }
    }
}