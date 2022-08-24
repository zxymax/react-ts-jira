### React Typescript Jira Project

> initial project

- `npx create-react-app jira-project --template typescript`

> install json-server

- `pnpm install json-server -D`

> Configure the `tsconfig.json` file

##### add options

```
// 绝对路径会去src下面去找
"baseUrl": "src"
```

> `Prettier` format code

##### install prettier eslint-config-prettier & create prettier file & create .prettierignore file

- `npm install --save-dev --save-exact prettier eslint-config-prettier`

- `echo {}> .prettierrc.json`

- .prettierignore 不需要格式化的文件
  build
  coverage

#### Prettier 手动格式化命令

- yarn prettier --write .

#### Pre-commit Hook 自动格式化

`npx mrm lint-staged`

> .env file environment

- .env // production use
- .env.development // development use

> 本地 node 服务器

代表：`json-server`

> REST API

#### URI 代表资源/对象 METHOD 代表行为

- GET /tickets // 列表
- GET /tickets/12 // 详情
- POST /tickets // 增加
- PUT /tickets/12 // 替换
- PATCH /tickets/12 // 修改
- DELETE /tickets/12 // 删除

### Configure json-server

- 项目根目录创建文件夹 mkdir **json_server_mock**

- **json_server_mock** 下创建 db.json

- package.json "scripts" 编写 json-server 执行命令

```
"json-server": "json-server __json_server_mock__/db.json --watch --port 3001"
```

- 运行 json-server `npm run json-server`

> 配置监听多个 json 文件

- 安装 concurrently `pnpm install -D concurrently`

- 配置 package.json 执行脚本 "scripts"

```
"json-server": "concurrently --kill-others \"json-server  --watch __json_server_mock__/db.json  --port 3001\"  \"json-server  --watch __json_server_mock__/alliances_ids.json --port 3002\"",

```

- 运行 json-server `npm run json-server`
