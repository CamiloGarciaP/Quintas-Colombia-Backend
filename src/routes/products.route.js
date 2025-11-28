import express from 'express';
const router =  express.Router();

router.get( "/", (req, res) => {
    res.json([
        { name:'ipad pro', price: 300 },
        { name:'ipad pro', price: 300 },
        { name:'ipad pro', price: 300 },
        { name:'ipad pro', price: 300 }
    ]);
} );

export default router;
