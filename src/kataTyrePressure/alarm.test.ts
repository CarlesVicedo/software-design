import Alarm from './alarm';
import SensorInterface from './sensorInterface';

class MockSensor implements SensorInterface {
  private value: number;
  constructor(value: number) {
    this.value = value;
  }

  popNextPressurePsiValue(): number {
    return this.value;
  }
}

const newSensorValue20: SensorInterface = new MockSensor(20);
const newSensorValue40: SensorInterface = new MockSensor(40);

describe('Given a Tyre Pressure Monitoring System', () => {
  describe('When it is implemented with a highThreshold of 30, lowThreshold of 15 and a currentValue of 20', () => {
    it('Then it should return false', () => {
      const tyreAlarm = new Alarm(30, 15, newSensorValue20);
      tyreAlarm.check();
      const isAlarmOn = tyreAlarm.isAlarmOn();
      expect(isAlarmOn).toBe(false);
    });
  });
  describe('When it is implemented with a highThreshold of 30, lowThreshold of 15 and a currentValue of 40', () => {
    it('Then it should return false', () => {
      const tyreAlarm = new Alarm(30, 15, newSensorValue40);
      tyreAlarm.check();
      const isAlarmOn = tyreAlarm.isAlarmOn();
      expect(isAlarmOn).toBe(true);
    });
  });
});
