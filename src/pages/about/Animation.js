export const about = {
    hidden: { 
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

export const aboutHead = {
    hidden: { 
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            type: 'spring'
        }
    }
}

export const aboutImag = {
    hidden: { 
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 1,
            type: 'spring'
        }
    }
}

export const aboutTextHead = {
    hidden: { 
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.4,
            duration: 1,
            type: 'spring'
        }
    }
}

export const aboutText = {
    hidden: { 
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1,
            type: 'spring'
        }
    }
}