🚀 빠르게 시작하기
bash
복사
편집
# 의존성 설치
npm install

# 빌드
npm run build
📁 프로젝트 구조
bash
복사
편집
my-mcp-weather/
├── src/
│   ├── tools/           # MCP 툴 모음
│   │   └── WeatherTool.ts
│   └── index.ts         # 서버 진입점
├── .env                 # 환경 변수(API 키 등)
├── package.json
└── tsconfig.json
🛠 MCP 툴 추가하기
예시 툴은 src/tools/ExampleTool.ts에 있습니다. 아래 CLI 명령어로 툴을 손쉽게 추가할 수 있어요:

bash
복사
편집
# 새 MCP 툴 추가
mcp add tool weather-helper
🧩 MCP 툴 예시 구조
ts
복사
편집
import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface WeatherInput {
  city: string;
}

class WeatherTool extends MCPTool<WeatherInput> {
  name = "weather";
  description = "도시 이름을 통해 현재 날씨를 알려줍니다";

  schema = {
    city: {
      type: z.string(),
      description: "도시 이름 (예: '서울')",
    },
  };

  async execute(input: WeatherInput) {
    // 날씨 API 호출 및 응답 반환
    return `지금 ${input.city}의 온도는 20도입니다.`;
  }
}

export default WeatherTool;

📚 참고 자료
MCP Framework GitHub

MCP Framework 공식 문서
