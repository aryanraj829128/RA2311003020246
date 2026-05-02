import axios from "axios";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhcnlhbjI2MDhyYWpAZ21haWwuY29tIiwiZXhwIjoxNzc3NzAwNjc0LCJpYXQiOjE3Nzc2OTk3NzQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI2ZjBmMDI0Ny0wYmNhLTQ5MTctODBlYy04YzA0MWU0N2MzNjAiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhcnlhbiByYWoiLCJzdWIiOiI4ZGZlMDRlNi00OTRlLTRlNWQtYmM1My0zNGNmYTliZWRlZTkifSwiZW1haWwiOiJhcnlhbjI2MDhyYWpAZ21haWwuY29tIiwibmFtZSI6ImFyeWFuIHJhaiIsInJvbGxObyI6InJhMjMxMTAwMzAyMDI0NiIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6IjhkZmUwNGU2LTQ5NGUtNGU1ZC1iYzUzLTM0Y2ZhOWJlZGVlOSIsImNsaWVudFNlY3JldCI6InFnRVlad1J4RkVtWnNwU3QifQ.1FrVRG8bwHrO4NOAtiW6XLTgRFtMOE0gnq41PXbr9q8";

export const Log = async (stack, level, pkg, message) => {
  try {
    const res = await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    console.log("Log success:", res.data);
  } catch (err) {
    console.error("Log error:", err.response?.data || err.message);
  }
};