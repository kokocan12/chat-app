import SockJs from 'sockjs-client';

const ws = new SockJs('https://javabuildtest.df.r.appspot.com/websocket');

export default ws;
