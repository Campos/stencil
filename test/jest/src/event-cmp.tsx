import { Component, Event, EventEmitter, Method } from '../../../dist/index';

@Component({
  tag: 'event-cmp'
})
export class EventCmp {

  @Event() myDocumentEvent: EventEmitter<any>;

  @Event({
    eventName: 'my-event-with-options',
    bubbles: false,
    cancelable: false
  }) myEventWithOptions: EventEmitter<{ mph: number }>;

  @Event() myWindowEvent: EventEmitter<number>;

  @Method()
  methodThatFiresMyWindowEvent(value: number) {
    console.log('methodThatFiresMyWindowEvent()', value);
    this.myWindowEvent.emit(value);
  }

  @Method()
  methodThatFiresMyDocumentEvent() {
    this.myDocumentEvent.emit();
  }

  @Method()
  methodThatFiresEventWithOptions() {
    console.log('methodThatFiresEventWithOptions()');
    this.myEventWithOptions.emit({ mph: 88 });
  }

}
