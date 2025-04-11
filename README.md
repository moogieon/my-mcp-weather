# 🌦️ my-mcp-weather

`mcp-framework`를 사용해 만든 **날씨 확인용 MCP 서버**입니다.  
OpenWeather API를 통해 도시의 현재 날씨를 가져옵니다.


## 📁 프로젝트 구조
```
my-mcp-weather/
├── src/
│   ├── tools/           # MCP 툴 정의
│   │   └── WeatherTool.ts
│   └── index.ts         # 서버 진입점
├── .env                 # 환경 변수(API 키 등)
├── package.json
└── tsconfig.json
```

## ✍️ MCP 툴 예시
```
import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface WeatherInput {
  city: string;
}

class WeatherTool extends MCPTool<WeatherInput> {
  name = "weather";
  description = "도시 이름을 통해 현재 날씨를 확인합니다.";

  schema = {
    city: {
      type: z.string(),
      description: "도시 이름 (예: '서울')",
    },
  };

  async execute(input: WeatherInput) {
    // 날씨 API 호출 및 처리 로직
    return `지금 ${input.city}의 온도는 20도입니다.`;
  }
}

export default WeatherTool;
```

## 📚 참고 자료
MCP Framework GitHub

MCP Framework 공식 문서
