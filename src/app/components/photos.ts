const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];


const retaimages = [
    { url: "/reta-img/imagen-reta (1).webp",  width: 1080, height: 1600 },
    { url: "/reta-img/imagen-reta (2).webp",  width: 1080, height: 1620 },
    { url: "/reta-img/imagen-reta (3).webp",  width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (4).webp",  width: 1080, height: 721 },
    { url: "/reta-img/imagen-reta (5).webp",  width: 1080, height: 1620 },
    { url: "/reta-img/imagen-reta (6).webp",  width: 1080, height: 607 },
    { url: "/reta-img/imagen-reta (7).webp",  width: 1080, height: 608 },
    { url: "/reta-img/imagen-reta (8).webp",  width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (9).webp",  width: 1080, height: 1549 },
    { url: "/reta-img/imagen-reta (10).webp", width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (11).webp", width: 1080, height: 694 },
    { url: "/reta-img/imagen-reta (12).webp", width: 1080, height: 1620 },
    { url: "/reta-img/imagen-reta (13).webp", width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (14).webp", width: 1080, height: 1440 },
    { url: "/reta-img/imagen-reta (15).webp", width: 1080, height: 1620 },
    { url: "/reta-img/imagen-reta (16).webp", width: 1080, height: 1200 },
    { url: "/reta-img/imagen-reta (17).webp", width: 1080, height: 610 },
    { url: "/reta-img/imagen-reta (18).webp", width: 1080, height: 500 },
    { url: "/reta-img/imagen-reta (19).webp", width: 1200, height: 810 },
    { url: "/reta-img/imagen-reta (20).webp", width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (21).webp", width: 1080, height: 600 },
    { url: "/reta-img/imagen-reta (22).webp", width: 1080, height: 1440 },
    { url: "/reta-img/imagen-reta (23).webp", width: 1080, height: 1600 },
    { url: "/reta-img/imagen-reta (24).webp", width: 1080, height: 1620 },
    { url: "/reta-img/imagen-reta (25).webp", width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (26).webp", width: 1080, height: 721 },
    { url: "/reta-img/imagen-reta (27).webp", width: 1080, height: 1620 },
    { url: "/reta-img/imagen-reta (28).webp", width: 1080, height: 607 },
    { url: "/reta-img/imagen-reta (29).webp", width: 1080, height: 608 },
    { url: "/reta-img/imagen-reta (30).webp", width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (31).webp", width: 1080, height: 1549 },
    { url: "/reta-img/imagen-reta (32).webp", width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (33).webp", width: 1080, height: 694 },
    { url: "/reta-img/imagen-reta (34).webp", width: 1080, height: 1620 },
    { url: "/reta-img/imagen-reta (35).webp", width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (36).webp", width: 1080, height: 1440 },
    { url: "/reta-img/imagen-reta (37).webp", width: 1080, height: 1620 },
    { url: "/reta-img/imagen-reta (38).webp", width: 1080, height: 1200 },
    { url: "/reta-img/imagen-reta (39).webp", width: 1080, height: 610 },
    { url: "/reta-img/imagen-reta (40).webp", width: 1080, height: 500 },
    { url: "/reta-img/imagen-reta (41).webp", width: 1200, height: 810 },
    { url: "/reta-img/imagen-reta (42).webp", width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (43).webp", width: 1080, height: 600 },
    { url: "/reta-img/imagen-reta (44).webp", width: 1080, height: 1440 },
    { url: "/reta-img/imagen-reta (45).webp", width: 4080, height: 1600 },
    { url: "/reta-img/imagen-reta (46).webp", width: 1080, height: 1620 },
    { url: "/reta-img/imagen-reta (47).webp", width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (48).webp", width: 1080, height: 721 },
    { url: "/reta-img/imagen-reta (49).webp", width: 1080, height: 1620 },
    { url: "/reta-img/imagen-reta (50).webp", width: 1080, height: 607 },
    { url: "/reta-img/imagen-reta (51).webp", width: 1080, height: 608 },
    { url: "/reta-img/imagen-reta (52).webp", width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (53).webp", width: 3080, height: 1549 },
    { url: "/reta-img/imagen-reta (54).webp", width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (55).webp", width: 1080, height: 694 },
    { url: "/reta-img/imagen-reta (56).webp", width: 1080, height: 1620 },
    { url: "/reta-img/imagen-reta (57).webp", width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (58).webp", width: 1080, height: 1440 },
    { url: "/reta-img/imagen-reta (59).webp", width: 1080, height: 1620 },
    { url: "/reta-img/imagen-reta (60).webp", width: 1080, height: 1200 },
    { url: "/reta-img/imagen-reta (61).webp", width: 1080, height: 610 },
    { url: "/reta-img/imagen-reta (62).webp", width: 1080, height: 500 },
    { url: "/reta-img/imagen-reta (63).webp", width: 1200, height: 810 },
    { url: "/reta-img/imagen-reta (64).webp", width: 1080, height: 720 },
    { url: "/reta-img/imagen-reta (65).webp", width: 1080, height: 600 },
    { url: "/reta-img/imagen-reta (66).webp", width: 1080, height: 704 },
    { url: "/reta-img/imagen-reta (67).webp", width: 1080, height: 623 },
    { url: "/reta-img/imagen-reta (68).webp", width: 3080, height: 1200 },
    { url: "/reta-img/imagen-reta (69).webp", width: 500, height: 431 },
    { url: "/reta-img/imagen-reta (70).webp", width: 1080, height: 953 },
    { url: "/reta-img/imagen-reta (71).webp", width: 750, height: 492 },
];

const photos = retaimages.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: photo.url,
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: photo.url,
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
