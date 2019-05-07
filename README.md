# Conversor de algarismos romanos para arábicos v.1

**Esta biblioteca se destina à conversão de algarismos romanos para arábicos e de arábicos para romanos, para uso em aplicações web.**


Na versão atual é capaz de converter números em algarismos romanos de 1 a 3999 para seus equivalentes em algarismos arábicos e também realiza a operação inversa.

## Como instalar:

```shell

$  npm install roman-to-arabic-lib

```

## Como utilizar:

```node

> const convert = require("./lib/index");
> convert.intToRoman(101)> // returns "CI"
> convert.romanToInt("CI") // returns "101"

```

## roadmap oficial do projeto

#### versão 3.0.0 (sem previsão, aceita-se contribuições)
- README tradução para o inglês;


#### versão 2.0.0 (previsão julho/2019)
- implementação da conversão para números acima de 3999;
- correção de bugs;

#### versão 1.0.0 (released)
 - funcionalidades:
	 - conversão de algarismos romanos em arábicos de 1 até 3999. 
	 - conversão de algarismos arábicos em romanos de 1 até 3999.

