import { debounceTime, fromEvent, map, scan, throttleTime } from "rxjs";

// fromEvent(document, "click").subscribe(() => console.log("Clicked!"));

// Purity 纯函数实现
fromEvent(document, "click")
  .pipe(scan((count) => count + 2, 10))
  .subscribe((count) => console.log(`Clicked ${count} times`));

// flow
fromEvent(document, "click")
  .pipe(scan((count) => count + "1", "10"))
  .subscribe((count) => console.log(`Clicked ${count} times`));

fromEvent(document, "click")
  .pipe(
    // throttleTime(1000),
    debounceTime(1000),
    scan((count) => count + 1, 0)
  )
  .subscribe((count) => console.log(`Clicked ${count} times`));

// values
fromEvent<MouseEvent>(document, "click")
  .pipe(
    throttleTime(1000),
    map((event) => event.clientX),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe((count) => console.log(count));

/**笔记
 * pipe 管道，数据流经过管道中的操作，得到最终结果，见 https://rxjs.dev/api/index/function/pipe
 */
