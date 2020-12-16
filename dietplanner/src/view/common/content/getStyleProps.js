

export default function getStyleProps(styleProps){
    const props = Object.keys(styleProps).map((key) => {
        return {key, val: styleProps[key]}
    })
        .reduce(function (acc, curr) {
            acc[curr["key"]] = curr["val"].concat("  !important");
            return acc;
        }, {});
    return props;
}