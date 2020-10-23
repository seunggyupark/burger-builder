export const updateObject = (oldOjbect, updatedProperties) => {
    return {
        ...oldOjbect,
        ...updatedProperties
    }
};