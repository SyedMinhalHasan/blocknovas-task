
//------------ Currency Convert Details ------------//
exports.convert = async (req, res) => {
	const { body: { base_code, target_code } } = req;

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/c282159d72c2e3c69979e9ab/pair/${base_code}/${target_code}`);
        if (response.status === 200) {
            const body = await response.json();
            const { conversion_rate, result } = body;
            
            if (result === 'error') {
                return res.status(400).json({
                    base_code, 
                    target_code, 
                    message: "Currency API failed"
                });
            }
            
            return res.status(200).json({
                base_code, 
                target_code, 
                conversion_rate, 
                message: "success"
            });
        } else {
            return res.status(400).json({
                base_code, 
                target_code, 
                message: "Currency API failed"
            });
        }
    } catch (err) {
        return res.status(400).json({
            base_code, 
            target_code, 
            message: err.message
        });
    }       
}