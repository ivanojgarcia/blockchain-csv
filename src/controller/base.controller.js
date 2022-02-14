import humanizeDuration from "humanize-duration";
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getHealthCheck = (req, res) => {
  return res.status(200).json({
    message: process.env.API_NAME,
    uptime: humanizeDuration(Math.round(process.uptime() * 1000), {
      language: "es",
    }),
  });
};
