function getGrade(s1, s2, s3) {
    let avg = (s1 + s2 + s3) / 3
    return avg <= 100 && 90 <= avg ? 'A' : avg <= 90 && 80 <= avg ? 'B' : avg <= 80 && 70 <= avg ? 'C' : avg <= 70 && 60 <= avg ? 'D' : 'F'
}