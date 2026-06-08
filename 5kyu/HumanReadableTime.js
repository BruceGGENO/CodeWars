function humanReadable(seconds) {
    const min = 60
    const hr = min * 60

    const Hour = String(Math.floor(seconds / hr) || 0).length === 2 ? Math.floor(seconds / hr) || 0 : `0${Math.floor(seconds / hr) || 0}`;
    seconds = String(seconds % hr || 0).length === 2 ? seconds % hr || 0 : `0${seconds % hr || 0}`;
    const Min = String(Math.floor(seconds / min) || 0).length === 2 ? Math.floor(seconds / min) || 0 : `0${Math.floor(seconds / min) || 0}`;
    seconds = String(seconds % min || 0).length === 2 ? seconds % min || 0 : `0${seconds % min || 0}`;

    return `${Hour}:${Min}:${seconds}`
}