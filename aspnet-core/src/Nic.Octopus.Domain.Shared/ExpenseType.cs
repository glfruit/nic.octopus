using System;
namespace Nic.Octopus.Domain.Shared
{
    public enum ExpenseType
    {
        Undefined,
        Subscription, // 服务订阅
        Traffic, // 交通出行
        Commodity, // 日杂用品
        Food // 食物支出
    }
}