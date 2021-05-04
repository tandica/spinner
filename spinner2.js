let spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let symbol = 0; symbol < spinner.length; symbol++) {
    setTimeout(() => { process.stdout.write(`\r${spinner[symbol]}`);}, symbol * 200)
}