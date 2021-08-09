const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line





router.post(`/350/initial-search`, function (req, res) {
    const userORaccount = req.session.data['initial-search'];
    

    if (userORaccount === 'users'
       ) {
        res.redirect(`/350/user-list`);
    }
   else res.redirect(`/350/account-list`);
});




router.post(`/350/uln-or-cohort`, function (req, res) {
    const ulnORcohort = req.session.data['uln-or-cohort'];
    

    if (ulnORcohort === 'uln'
       ) {
        res.redirect(`/350/uln-view`);
    }
   else res.redirect(`/350/cohort-summary`);
});














module.exports = router
