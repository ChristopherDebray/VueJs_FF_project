export default function stringifyJobRole (jobRoleInt) {
    const roleString = {
        0: () => 'Profession',
        1: () => 'Tank',
        2: () => 'Melee DPS',
        3: () => 'Ranged DPS (Physical or Magical)',
        4: () => 'Healer',
        'default': () => 'Unknown role'
    };

    return (roleString[jobRoleInt] || roleString['default'])()
}