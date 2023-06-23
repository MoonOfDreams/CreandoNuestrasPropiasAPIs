const db = require("../../database/models");
const sequelize = db.sequelize;

const genresController = {
  list: async (req, res) => {
    let genres = await db.Genre.findAll();
    const RESPONSE = {
      meta: {
        status: 200,
        total:genres.length,
        url:"api/genres"

    },
      data: genres,
    };
    res.status(200).json(RESPONSE);
  },
  detail: async (req, res) => {
    let genre = await db.Genre.findByPk(req.params.id);
    const RESPONSE = {
        meta: {
          status: 200,
          url:"api/genres/detail/"+genre.id
  
      },
        data: genre,
      };
      res.status(200).json(RESPONSE);
  },
};

module.exports = genresController;
