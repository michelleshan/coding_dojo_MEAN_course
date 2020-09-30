function block(num = 5) {
        if (num === 0) return;
        return block(num -1);
    }
    function ping() {
        block();
        return 'PING!';
    }
    ping();