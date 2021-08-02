/**
 * Formats an age (in months) as a human readable string
 * @param {Number} age - The age to format (in number of months)
 * @param {Boolean} plurals - Whether or not to pluralize age durations
 * @returns {String} The formatted age duration
 */
export default function formatAge(age, plurals = false) {
    const months = age % 12;
    const months_plural = months == 1 ? 'month' : 'months';
    const years = Math.floor(age / 12);
    const years_plural = years == 1 ? 'year' : 'years'
    if (age < 12) return `${months} ${plurals ? months_plural : 'month'}`
    else if (months == 0) return `${years} ${plurals ? years_plural : 'year'}`
    else return `${years} ${plurals ? years_plural : 'year'}, ${months} ${plurals ? months_plural : 'month'}`
}