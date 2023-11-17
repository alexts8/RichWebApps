const { interval, fromEvent, merge, Subject } = rxjs;
const { startWith, scan, takeUntil, tap } = rxjs.operators;

function start() {
  const hour= document.getElementById('hour');
  const min = document.getElementById('min');
  const second = document.getElementById('second');
  const timer = document.getElementById('timer');
  const hours = parseInt(hour.value, 10)||0;
  const minutes = parseInt(min.value, 10)||0;
  const seconds = parseInt(second.value, 10)||0;

  const time=hours*3600+minutes*60+seconds;

  const countdown$ = interval(1000).pipe(
    scan((acc) => acc - 1, time),
    startWith(time),
    takeUntil(merge(fromEvent(hour, 'input'), fromEvent(min, 'input'), fromEvent(second, 'input')),
    tap((value) => {
      const remaininghours = Math.floor(value / 3600);
      const remainingmins = Math.floor((value % 3600) / 60);
      const remainingseconds = value % 60;
      timer.textContent = `${String(remaininghours).padStart(2, '0')}:${String(remainingmins).padStart(2, '0')}:${String(remainingseconds).padStart(2, '0')}`;
    })
  ));


}