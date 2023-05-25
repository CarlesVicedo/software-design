import AlarmInterface from './alarmInterface';
import SensorInterface from './sensorInterface';

export default class Alarm implements AlarmInterface {
  private alarmOn: boolean;
  private highThreshold: number;
  private lowThreshold: number;
  private currentSensor: SensorInterface;

  constructor(
    highThreshold: number,
    lowThreshold: number,
    sensor: SensorInterface,
  ) {
    this.lowThreshold = lowThreshold;
    this.highThreshold = highThreshold;
    this.alarmOn = false;
    this.currentSensor = sensor;
  }

  public check() {
    const currentSensorValue = this.currentSensor.popNextPressurePsiValue();
    if (
      currentSensorValue < this.lowThreshold ||
      this.highThreshold < currentSensorValue
    ) {
      this.alarmOn = true;
    }
  }

  public isAlarmOn() {
    return this.alarmOn;
  }
}
