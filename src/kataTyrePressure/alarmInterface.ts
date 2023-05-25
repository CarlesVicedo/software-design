/* eslint-disable semi */
export default interface Alarm {
  check(_popNextPressurePsiValue: number): void;
  isAlarmOn(): boolean;
}
