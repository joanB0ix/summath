export interface ITimer {
  isActive: boolean;
  endingAction: () => void;
}
