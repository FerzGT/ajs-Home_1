export default function healthPlayr(units) {
    let hpPlayr;
    units.health <= 15 ? hpPlayr = 'critical' : units.health <= 50 ? hpPlayr = 'wounded' : hpPlayr = 'healthy';
      if (Number.isNaN(units.health) || units.health === undefined || units.health < 0 || typeof (units.health) !== 'number') {
    throw new Error('Parameter is not a number!');
      }
    return hpPlayr;
}