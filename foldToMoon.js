function foldTo(distance) {
    if (distance < 0){
        return null
    }
    thickness = 0.0001
    timesFolded = 0
    while (thickness <= distance){
        timesFolded += 1;
        thickness = thickness * 2
    }
    return timesFolded
}