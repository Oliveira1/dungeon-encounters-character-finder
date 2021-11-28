export const floorPrediction = (combinations) => {
    if (!combinations.length) return 0;
    var mode = {}
    var TopFloor = combinations[0][0];
    var maxCount = 1;

    combinations.forEach(cs => {
        let currentFloor = cs[0];
        mode[currentFloor] = (mode[currentFloor] == null) ? 1 : mode[currentFloor] += 1;

        if (mode[currentFloor] > maxCount) {
            TopFloor = currentFloor;
            maxCount = mode[currentFloor];
        }
    })

    let prob = maxCount / combinations.length;
    return {floor: TopFloor, prediction: prob}
}
