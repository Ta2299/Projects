db.createCollection("test_data")

db.test_data.insertMany([

    {

        "class": "NO",

        "age": 35,

        "menopause": "premeno",

        "deg_malig": 3,

        "breast": "left",

        "breast_quad": "left_low",

        "irradiat": "no"

    },  

    {

        "class": "NO",

        "age": 42,

        "menopause": "premeno",

        "deg_malig": 2,

        "breast": "right",

        "breast_quad": "right_up",

        "irradiat": "no"

    },

    {

        "class": "NO",

        "age": 30,

        "menopause": "premeno",

        "deg_malig": 2,

        "breast": "left",

        "breast_quad": "left_low",

        "irradiat": "no"

    },

    {

        "class": "NO",

        "age": 61,

        "menopause": "ge40",

        "deg_malig": 2,

        "breast": "right",

        "breast_quad": "left_up",

        "irradiat": "no"

    },

    {

        "class": "NO",

        "age": 45,

        "menopause": "premeno",

        "deg_malig": 2,

        "breast": "right",

        "breast_quad": "right_low",

        "irradiat": "no"

    },

    {

        "class": "NO",

        "age": 64,

        "menopause": "ge40",

        "deg_malig": 2,

        "breast": "left",

        "breast_quad": "left_low",

        "irradiat": "no"

    },

    {

        "class": "NO",

        "age": 52,

        "menopause": "premeno",

        "deg_malig": 2,

        "breast": "left",

        "breast_quad": "left_low",

        "irradiat": "no"

    },

    {

        "class": "NO",

        "age": 67,

        "menopause": "ge40",

        "deg_malig": 1,

        "breast": "left",

        "breast_quad": "left_low",

        "irradiat": "no"

    },

    {

        "class": "YES",

        "age": 41,

        "menopause": "premeno",

        "deg_malig": 2,

        "breast": "left",

        "breast_quad": "left_low",

        "irradiat": "no"

    },

    {

        "class": "YES",

        "age": 43,

        "menopause": "premeno",

        "deg_malig": 2,

        "breast": "right",

        "breast_quad": "left_up",

        "irradiat": "no"

    },

    {

        "class": "YES",

        "age": 41,

        "menopause": "premeno",

        "deg_malig": 3,

        "breast": "left",

        "breast_quad": "central",

        "irradiat": "no"

    },

    {

        "class": "YES",

        "age": 44,

        "menopause": "ge40",

        "deg_malig": 2,

        "breast": "left",

        "breast_quad": "left_low",

        "irradiat": "no"

    },

    {

        "class": "YES",

        "age": 61,

        "menopause": "lt40",

        "deg_malig": 1,

        "breast": "left",

        "breast_quad": "right_up",

        "irradiat": "no"

    },

    {

        "class": "YES",

        "age": 55,

        "menopause": "ge40",

        "deg_malig": 3,

        "breast": "left",

        "breast_quad": "right_up",

        "irradiat": "no"

    },

    {

        "class": "YES",

        "age": 44,

        "menopause": "premeno",

        "deg_malig": 3,

        "breast": "left",

        "breast_quad": "left_up",

        "irradiat": "no"

    }])

    db.test_data.aggregate([{$group:{_id: null, avg_age:{$avg: "age"}}}])

        

        

          

         

        

        

    