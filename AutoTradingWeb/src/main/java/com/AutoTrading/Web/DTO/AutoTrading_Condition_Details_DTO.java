package com.AutoTrading.Web.DTO;

import lombok.Getter;

@Getter
public class AutoTrading_Condition_Details_DTO {
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
	    public String COMPARE_CURRENT_PRICE_WITH_EMA200;
	    public String COMPARE_EMA5_WITH_EMA10;
	    public String COMPARE_EMA5_WITH_EMA200;
	    public String COMPARE_MACD12_WITH_MACD26;
	    public String COMPARE_MACD12_WITH_ZERO;
	    public String CHECK_CCI_OR_CURRENT_CCI;	    
}
