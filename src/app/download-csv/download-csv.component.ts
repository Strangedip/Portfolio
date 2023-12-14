import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'download-csv',
  templateUrl: './download-csv.component.html',
  styleUrls: ['./download-csv.component.scss']
})
export class DownloadCsvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jsonValue = {
    "status": 200,
    "payLoad": {
      "totalCount": 1,
      "payLoadList": "\"Id\",\"entityId\",\"eventId\",\"entityName\",\"eventName\",\"productName\",\"status\",\"startDate\",\"endDate\",\"jobName\",\"currentMilestone\",\"trackingId\",\"statusDescription\",\"direction\",\"fileName\",\"endpoint\",\"ackStatus\",\"reqKeywords\",\"respKeywords\",\"ackEndpoint\",\"metaData\",\"integrationUniqueKey\",\"tenantId\",\"ackFileName\",\"attachmentsEnabled\",\"rawClientData\",\"transformedClientData\",\"rawZycusData\",\"transformedZycusData\"\n\"295228\",\"7f557f78-b429-43ce-9f77-77cd3496ccda\",\"8a4f1306-8bfc2054-018c-01795780-0773\",\"PURCHASE_ORDER\",\"SUBMITTED\",\"EPROC\",\"SUCCESS\",\"Fri Nov 24 18:47:02 IST 2023\",\"20231124T064707000000786\",\"AUTOCODECEPT_PURCHASE_ORDER_OUTBOUND\",\"EVENT_PROCESSING_COMPLETED\",\"4521#901a571e-70f7-4ae1-9a38-b4bba3d45814#46788ca4-d913-4a7c-a3af-20e7c25d4c2d#1700831823357\",\"File: test-file-name_20231124T064706790418000_651.test uploaded sucessfully to directory /RUMIL/FROM_ZYCUS/PURCHASE_ORDER/DATA_FILES_2/064361ba-1795-49cd-bb76-c360da50a00f, Event Callback Successful: Record successfully back updated\",\"outbound\",\"null\",\"\",\"null\",\"null\",\"null\",\"null\",\"test-file-name_20231124T064706790418000_651.test\",\"4521#901a571e-70f7-4ae1-9a38-b4bba3d45814#46788ca4-d913-4a7c-a3af-20e7c25d4c2d#1700831823357\",\"901a571e-70f7-4ae1-9a38-b4bba3d45814\",\"null\",\"n\",\"null\",\"null\",\"null\",\"null\"\n"
    }
  };

  convert() {
    const csvData = new Blob([this.jsonValue.payLoad.payLoadList], { type: 'text/csv' });
    const csvUrl = URL.createObjectURL(csvData);

    const a = document.createElement('a');
    a.href = csvUrl;
    a.download = 'output.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(csvUrl);
  }

}
