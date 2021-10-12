export class CounterService {
  toInactiveCount = 0;
  toActiveCount = 0;
  allActions = 0;

  countToInactiveAction() {
    this.toInactiveCount++;
    this.allActions++;
    console.log('active->inactive: ' + this.toInactiveCount + ';\n all actions performed: ' + this.allActions);
  }

  countToActiveToAction() {
    this.toActiveCount++;
    this.allActions++;
    console.log('inactive->active: ' + this.toActiveCount + ';\n all actions performed: ' + this.allActions);
  }
}
