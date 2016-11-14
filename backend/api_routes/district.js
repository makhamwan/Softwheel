/**
 * Created by wit on 11/13/2016.
 */
(function () {
    'use static';
    module.exports = (function (router,connector) {
        router.get("/district",function (req,res) {
            if (req.query.province != undeclared){
                return res.json({
                    name:"rd15"
                })
            }
            return res.json({
                districts:[
                    {name:"แก้งเหนือ"},
                    {name:"เขมราฐ"}
                ]
            });
        });

        router.get("/district/:districtName",function (req,res){
        // req.params.id
            return res.json({
                rices:[
                    {name:"rd15"},
                    {name:"rd1"}
                ]
            })
        });
    });
})();