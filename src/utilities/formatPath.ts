export const formatPath = (pathParam: string) => {
    const paths = pathParam.split('/');
    const thirdSegment = paths[2];

    if (!thirdSegment) {
        return '';
    }

    return thirdSegment.toLocaleUpperCase();
}

