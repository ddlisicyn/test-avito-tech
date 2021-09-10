export class AutoUpdater {
    time; 
    intervalId;
    callback; 

    constructor(time = 10000) {
        this.time = time;
    }

    start(callback) {
        if (!this.time) { return; }
        this.callback = callback;
        this.intervalId = window.setInterval(callback, this.time);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    refresh() {
        if (!this.callback) {
            return;
        }
        this.stop();
        this.start(this.callback);
    }
}
