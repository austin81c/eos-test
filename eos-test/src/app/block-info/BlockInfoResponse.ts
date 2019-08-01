import DateTimeFormat = Intl.DateTimeFormat;

export class BlockInfoResponse {
  block_cpu_limit: number;
  block_net_limit: number;
  chain_id: string;
  fork_db_head_block_id: string;
  fork_db_head_block_num: number;
  head_block_id: string;
  head_block_num: number;
  head_block_producer: string;
  head_block_time: DateTimeFormat;
  last_irreversible_block_id: string;
  last_irreversible_block_num: number;
  server_version: string;
  server_version_string: string;
  virtual_block_cpu_limit: number;
  virtual_block_net_limit: number;
}
