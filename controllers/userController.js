const { readFileAsync } = require("../Modules");

exports.getAllUsers = async (req, res, next) => {
  let data = null;
  try {
    data = await readFileAsync("./data/users.json");
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({
    data: data,
    message: "success",
    IsSuccess: true,
  });
};

exports.getUser = async (req, res, next) => {
  const user_Id = req.params.id;
  let data = [];
  let filteredData = null;
  try {
    data = await readFileAsync("./data/users.json");
    data = JSON.parse(data);
    filteredData = data.filter((item) => {
      return item.id == user_Id;
    });
  } catch (error) {
    console.log(error);
  }
  if (filteredData.length > 0) {
    res.status(200).json({
      data: filteredData,
      message: "success",
      IsSuccess: true,
    });
  } else {
    res.status(404).json({
      message: "user not found",
      IsSuccess: false,
    });
  }
};

exports.createUser = async (req, res, next) => {
  let data = req.body;
  res.status(201).json({
    data: data,
    message: "success",
    IsSuccess: true,
  });
};

exports.updateUser = async (req, res, next) => {
  const user_Id = req.params.id;
  let updateData = req.body;
  let data = [];
  let index = -1;
  try {
    data = await readFileAsync("./data/users.json");
    data = JSON.parse(data);
    index = data.findIndex((item) => {
      return item.id == user_Id;
    });
  } catch (error) {
    console.log(error);
  }
  if (index !== -1) {
    if (updateData.Username !== undefined) {
      data[index] = {
        ...data[index],
        Username: updateData.Username,
      };
    }
    if (updateData.Email !== undefined) {
      data[index] = {
        ...data[index],
        Email: updateData.Email,
      };
    }
    res.status(200).json({
      data: data[index],
      message: "success",
      IsSuccess: true,
    });
  } else {
    res.status(404).json({
      message: "user not found",
      IsSuccess: false,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  const user_Id = req.params.id;
  let data = [];
  let filteredData = null;
  try {
    data = await readFileAsync("./data/users.json");
    data = JSON.parse(data);
    index = data.findIndex((item) => {
      return item.id == user_Id;
    });
  } catch (error) {
    console.log(error);
  }
  if (index !== -1) {
    res.sendStatus(204);
  } else {
    res.status(404).json({
      message: "user not found",
      IsSuccess: false,
    });
  }
};
