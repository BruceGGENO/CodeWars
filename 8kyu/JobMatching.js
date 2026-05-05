function match(candidate, job) {
    if (!candidate.minSalary || !job.maxSalary) throw new Error("Error");
    return candidate.minSalary * 0.9 <= job.maxSalary ? true : false
}