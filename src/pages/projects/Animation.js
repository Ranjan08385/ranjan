export const projects = {
    hidden: { 
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

export const projectsHead = {
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

export const projectOne = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.8,
            duration: 1,
            type: 'spring'
        }
    }
}

export const projectTwo = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.6,
            duration: 1,
            type: 'spring'
        }
    }
}

export const projectThree = {
    hidden: {
        x: -100,
        opacity: 0,
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