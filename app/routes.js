const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line




// TIER 1 STARTS
router.post(`/350/tier1/initial-search`, function (req, res) {
    const userORaccount = req.session.data['initial-search'];
    

    if (userORaccount === 'users'
       ) {
        res.redirect(`/350/tier1/user-list`);
    }
   else res.redirect(`/350/tier1/account-list`);
});




router.post(`/350/tier1/uln-or-cohort`, function (req, res) {
    const ulnORcohort = req.session.data['uln-or-cohort'];
    

    if (ulnORcohort === 'uln'
       ) {
        res.redirect(`/350/tier1/uln-view`);
    }
   else res.redirect(`/350/tier1/cohort-summary`);
});

// TIER 1 ENDS


// TIER 2 STARTS

router.post(`/350/tier2/initial-search`, function (req, res) {
    const userORaccount = req.session.data['initial-search'];
    

    if (userORaccount === 'users'
       ) {
        res.redirect(`/350/tier2/user-list`);
    }
   else res.redirect(`/350/tier2/account-list`);
});




router.post(`/350/tier2/uln-or-cohort`, function (req, res) {
    const ulnORcohort = req.session.data['uln-or-cohort'];
    

    if (ulnORcohort === 'uln'
       ) {
        res.redirect(`/350/tier2/uln-view`);
    }
   else res.redirect(`/350/tier2/cohort-summary`);
});

// TIER 2 ENDS







module.exports = router