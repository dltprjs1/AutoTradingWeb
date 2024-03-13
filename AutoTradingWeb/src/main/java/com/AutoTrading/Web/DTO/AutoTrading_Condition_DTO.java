package com.AutoTrading.Web.DTO;

import lombok.Getter;

@Getter
public class AutoTrading_Condition_DTO {
	    public String DATE;
	    public String TIME;
	    public String CURRENT_PRICE;
	    public String EMA5;
	    public String EMA10;
	    public String EMA200;
	    public String CURRENT_EMA200;
	    public String MACD12;
	    public String MACD26;
	    public String CCI;
	    public String CURRENTCCI;
	    public int TotalPages;
}
