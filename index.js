function byModule(props) {
	const totalBeefPrice = props.saltBeefBought * props.saltBeefPrice;
	const totalRicePrice = props.redRiceBought * props.redRicePrice;
	const totalVinePrice = props.oldVineBought * props.oldVinePrice;
	const remainder = props.salary - totalBeefPrice - totalRicePrice - totalVinePrice;
	const totalRemainder = remainder % props.exchange;

	return totalRemainder;
}

module.exports = byModule;