import { MCPTool } from "mcp-framework";
import { z } from "zod";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

interface WeatherInput {
  city: string;
}

class WeatherTool extends MCPTool<WeatherInput> {
  name = "weather";
  description = "Get current weather by city name";

  schema = {
    city: {
      type: z.string(),
      description: "City name (e.g., '서울')",
    },
  };

  async execute(input: WeatherInput) {
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        input.city
      )}&appid=${apiKey}&units=metric`
    );
    const data = (await response.json()) as {
      cod: number;
      message?: string;
      main: { temp: number };
      weather: { description: string }[];
    };

    if (data.cod !== 200) {
      return {
        error: {
          code: -32000,
          message: data.message || "Weather API error",
        },
      };
    }

    return `The current temperature in ${input.city} is ${data.main.temp}°C with ${data.weather[0].description}.`;
  }
  catch() {
    return {
      error: {
        code: -32000,
        message: "Failed to fetch weather",
      },
    };
  }
}

export default WeatherTool;
