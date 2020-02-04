import mongoose from "mongoose";

import Medicine from "../models/Medicine";

class MedicineController {
  /**
   * Returns a list of medicines for a user.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  list(req, res, next) {
    let { search, limit, offset } = req.query;
    search = search || "";
    limit = limit || 10;
    offset = offset || 0;

    // Number of records to skip (pagination).
    const skip = offset * limit;

    const filter = { createdBy: req.userId };

    if (search !== "") {
      filter.name = new RegExp(search, "i");
    }

    // Find the user's medicines. Hide the createdBy attribute.
    Medicine.find(filter, { createdBy: 0 }, { skip }, function(err, medicines) {
      if (err) {
        const { message } = err;
        res.send(400, { message });
      }

      res.send(medicines);
    });

    return next();
  }

  /**
   * Store a new medicine in the users list.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  store(req, res, next) {
    const { body, userId } = req;

    body.createdBy = userId;
    const medicine = new Medicine(body);
    medicine.save(function(err, newMedicine) {
      if (err) {
        const { message } = err;
        // if (err.message.indexOf("duplicate key error") !== -1) {
        //   message = "The email provided is already in use.";
        // }
        res.send(400, { message });
      }

      // Saved!
      // Remove some keys and send the document as the response.
      const { createdBy, ...responseModel } = newMedicine._doc;
      res.send(responseModel);

      return next();
    });
  }

  /**
   * Updates a medicine.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  update(req, res, next) {
    const { body, userId } = req;
    const { medicineId } = req.params;

    Medicine.findById(medicineId, (err, medicine) => {
      if (err) {
        const { message } = err;
        res.send(400, { message });
      }

      // Check if the user is the owner of the medicine.
      const id1 = mongoose.Types.ObjectId(userId);
      const id2 = mongoose.Types.ObjectId(medicine.createdBy);
      if (!id1.equals(id2)) {
        return res.send(403, "You can't edit this medicine.");
      }

      // Update the medicine properties with the ones that were sent.
      for (const i in body) {
        medicine[i] = body[i];
      }

      // Save the model with the new values.
      medicine.save(() => {
        return res.send(200);
      });

      return next();
    });
  }

  /**
   * Deletes a medicine from the list.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  delete(req, res, next) {
    const { userId } = req;
    const { medicineId } = req.params;

    Medicine.findById(medicineId, (err, medicine) => {
      if (err) {
        const { message } = err;
        res.send(400, { message });
      }

      // Check if the user is the owner of the medicine.
      const id1 = mongoose.Types.ObjectId(userId);
      const id2 = mongoose.Types.ObjectId(medicine.createdBy);
      if (!id1.equals(id2)) {
        return res.send(403, "You can't delete this medicine.");
      }

      // Delete the model.
      Medicine.deleteOne({ _id: medicineId }, () => {
        return res.send(200);
      });

      return next();
    });
  }
}

export default new MedicineController();
